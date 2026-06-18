import React from 'react';
import AppLayout from '@/components/AppLayout';
import ChatSidebar from './components/ChatSidebar';
import ChatMain from './components/ChatMain';

export default function AITutorChatPage() {
  return (
    <AppLayout activePath="/ai-tutor-chat">
      <div className="flex gap-0 h-[calc(100vh-64px-48px)] -mx-4 lg:-mx-6 xl:-mx-8 2xl:-mx-10 -my-6">
        <ChatSidebar />
        <ChatMain />
      </div>
    </AppLayout>
  );
}