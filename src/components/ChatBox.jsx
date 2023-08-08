import React, { useState, useEffect } from 'react';


import { AiOutlineMessage, AiOutlineDown } from 'react-icons/ai';
import axios from 'axios';



const Chat = ({ LeadId, employeeId, LeadModel }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [comments, setComments] = useState([]);

  const tokenData = localStorage.getItem("token");
  const token = tokenData ? JSON.parse(tokenData).usertoken : '';

  useEffect(() => {
    fetchCommentsForLead();
  }, []);

  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleAddComment = async () => {
    if (message.trim() !== '') {
      try {
        const newComment = {
          comment: message,
          leadId: LeadId,
          employee: employeeId,
        };

        const response = await axios.post(
          'https://api.solutionsathee.com/api/v1/crm/addcommenttolead',
          newComment,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setComments([...comments, response.data.response]);
        setMessage('');
      } catch (error) {
       
      }
    }
  };

  const fetchCommentsForLead = async () => {
    try {
      const response = await axios.get(
        `https://api.solutionsathee.com/api/v1/crm/getcommentoflead?leadId=${LeadId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setComments(response.data.response);
    } catch (error) {
    }
  };

  const handleCloseChatbox = () => {
    setIsOpen(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddComment();
    }
  };

  return (
    <div className="relative m-6">
      <button
        onClick={toggleChatbox}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-full"
      >
        {isOpen ? (
          <AiOutlineDown className="h-6 w-6" />
        ) : (
          <AiOutlineMessage className="h-6 w-6" />
        )}
      </button>
      {isOpen && (
        <div className="absolute bottom-0 right-0 m-4 bg-white shadow-lg rounded-lg w-80">
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-blue-500">
              <h2 className="text-lg font-bold mb-2 pt-2 pl-2 text-white">Chat Box</h2>
              <button
                onClick={handleCloseChatbox}
                className="text-gray-500 hover:text-gray-800 absolute top-2 right-2"
              >
                <AiOutlineDown className="h-7 w-7 bg-blue-500 pt-2 pr-2" />
              </button>
            </div>
            <div className="h-48 overflow-y-auto">
              {comments.map((comment, index) => (
                <div key={index} className="flex flex-col mb-2">
                  <span className="text-sm text-black p-1 m-1 rounded bg-yellow-400 max-w-max">
                    {new Date(comment.createdAt).toLocaleString(undefined, {
                      dateStyle: 'medium',
                      timeStyle: 'medium',
                    })}
                  </span>
                  <p>
                    <span className="text-sm text-white p-1 m-1 rounded bg-purple-400 max-w-max">
                      {comment.Employee.first_name} {comment.Employee.middle_name} {comment.Employee.last_name} :{' '}
                    </span>
                    <span className="text-black">{comment.Comment}</span>
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Enter..."
                value={message}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                className="w-full border border-gray-300 rounded px-4 py-2 mr-2 text-black"
              />
              <button
                onClick={handleAddComment}
                className="w-full bg-blue-500 hover:bg-blue-900 text-white px-4 py-2 rounded mt-2 mr-2"
                type="button" 
              >
                Add Comment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;