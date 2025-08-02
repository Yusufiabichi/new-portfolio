
'use client';

import { useState } from 'react';

export default function MessagesTable() {
  const [messages] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      subject: 'E-commerce Project Inquiry',
      message: 'Hi Yusuf, I need help building an e-commerce platform for my boutique store. The site needs payment integration, inventory management, and a modern design.',
      date: '2024-01-15',
      time: '14:30',
      status: 'new'
    },
    {
      id: 2,
      name: 'Mike Chen',
      email: 'mike.chen@techstartup.com',
      subject: 'Full-stack Developer Position',
      message: 'We are impressed by your portfolio and would like to discuss a full-time position at our tech startup. We work with React, Node.js, and MongoDB.',
      date: '2024-01-14',
      time: '09:15',
      status: 'read'
    },
    {
      id: 3,
      name: 'Emma Williams',
      email: 'emma.w@consulting.com',
      subject: 'Website Redesign Project',
      message: 'Our consulting firm needs a complete website redesign. We want a modern, professional look with better user experience and mobile optimization.',
      date: '2024-01-13',
      time: '16:45',
      status: 'replied'
    },
    {
      id: 4,
      name: 'David Rodriguez',
      email: 'david@restaurant.com',
      subject: 'Restaurant Management System',
      message: 'I own a chain of restaurants and need a custom management system for orders, inventory, and staff scheduling. Can you help with this?',
      date: '2024-01-12',
      time: '11:20',
      status: 'new'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      email: 'lisa.t@marketing.com',
      subject: 'Landing Page Development',
      message: 'We need several high-converting landing pages for our marketing campaigns. The pages need to be fast, responsive, and optimized for conversions.',
      date: '2024-01-11',
      time: '13:55',
      status: 'read'
    }
  ]);

  const [selectedMessage, setSelectedMessage] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [replyData, setReplyData] = useState({
    subject: '',
    message: ''
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-green-100 text-green-800';
      case 'read':
        return 'bg-blue-100 text-blue-800';
      case 'replied':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const openMessage = (message: any) => {
    setSelectedMessage(message);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedMessage(null);
  };

  const openReplyModal = (message: any) => {
    setSelectedMessage(message);
    setReplyData({
      subject: `Re: ${message.subject}`,
      message: `Hi ${message.name},\n\nThank you for your message. `
    });
    setShowReplyModal(true);
    setShowModal(false);
  };

  const closeReplyModal = () => {
    setShowReplyModal(false);
    setSelectedMessage(null);
    setReplyData({ subject: '', message: '' });
  };

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with reply content
    const mailtoLink = `mailto:${selectedMessage.email}?subject=${encodeURIComponent(replyData.subject)}&body=${encodeURIComponent(replyData.message)}`;
    window.open(mailtoLink, '_blank');
    
    closeReplyModal();
    
    // Show success message
    alert('Reply email opened in your default email client!');
  };

  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Contact Messages</h3>
          <p className="text-sm text-gray-600 mt-1">Manage all messages received from your portfolio contact form</p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subject
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {messages.map((message) => (
                <tr key={message.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{message.name}</div>
                      <div className="text-sm text-gray-500">{message.email}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900 max-w-xs truncate">{message.subject}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{message.date}</div>
                    <div className="text-sm text-gray-500">{message.time}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(message.status)}`}>
                      {message.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => openMessage(message)}
                      className="text-blue-600 hover:text-blue-900 cursor-pointer whitespace-nowrap transition-colors"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Message Modal */}
      {showModal && selectedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Message Details</h3>
              <button
                onClick={closeModal}
                className="w-6 h-6 text-gray-400 hover:text-gray-600 cursor-pointer flex items-center justify-center"
              >
                <i className="ri-close-line text-xl w-6 h-6 flex items-center justify-center"></i>
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">From:</label>
                  <p className="text-gray-900">{selectedMessage.name} ({selectedMessage.email})</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700">Subject:</label>
                  <p className="text-gray-900">{selectedMessage.subject}</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700">Date:</label>
                  <p className="text-gray-900">{selectedMessage.date} at {selectedMessage.time}</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700">Message:</label>
                  <div className="mt-2 p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-900 leading-relaxed">{selectedMessage.message}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex gap-3">
                <button 
                  onClick={() => openReplyModal(selectedMessage)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer whitespace-nowrap transition-colors"
                >
                  Reply
                </button>
                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 cursor-pointer whitespace-nowrap transition-colors">
                  Mark as Read
                </button>
                <button className="text-red-600 hover:text-red-800 px-4 py-2 cursor-pointer whitespace-nowrap transition-colors">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reply Modal */}
      {showReplyModal && selectedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Reply to {selectedMessage.name}</h3>
              <button
                onClick={closeReplyModal}
                className="w-6 h-6 text-gray-400 hover:text-gray-600 cursor-pointer flex items-center justify-center"
              >
                <i className="ri-close-line text-xl w-6 h-6 flex items-center justify-center"></i>
              </button>
            </div>
            
            <form onSubmit={handleSendReply} className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">To:</label>
                  <p className="text-gray-900 bg-gray-50 px-4 py-2 rounded-lg">{selectedMessage.email}</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Subject:</label>
                  <input
                    type="text"
                    value={replyData.subject}
                    onChange={(e) => setReplyData({ ...replyData, subject: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Message:</label>
                  <textarea
                    value={replyData.message}
                    onChange={(e) => setReplyData({ ...replyData, message: e.target.value })}
                    rows={8}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Type your reply here..."
                    required
                  />
                </div>
              </div>
              
              <div className="mt-6 flex gap-3">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 cursor-pointer whitespace-nowrap transition-colors font-medium flex items-center gap-2"
                >
                  <i className="ri-send-plane-line w-4 h-4 flex items-center justify-center"></i>
                  Send Reply
                </button>
                <button
                  type="button"
                  onClick={closeReplyModal}
                  className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 cursor-pointer whitespace-nowrap transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
