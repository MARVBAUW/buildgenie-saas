
import React, { useState } from 'react';
import { Sparkles, X, Send, Maximize, Minimize } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface AIAssistantProps {
  className?: string;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Bonjour ! Je suis votre assistant IA. Comment puis-je vous aider aujourd'hui ?", isUser: false },
  ]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    if (isMinimized) setIsMinimized(false);
  };

  const toggleMinimize = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMinimized(!isMinimized);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message
    setMessages([...messages, { text: message, isUser: true }]);
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "Je vais analyser votre requête. En tant qu'assistant IA intégré, je peux vous aider avec la gestion de projet, les estimations de coûts, ou générer des documents.", 
        isUser: false 
      }]);
    }, 1000);
    
    setMessage('');
  };

  return (
    <>
      {/* Floating button when closed */}
      {!isOpen && (
        <Button
          onClick={toggleOpen}
          className="fixed bottom-6 right-6 rounded-full h-14 w-14 p-0 shadow-glass-strong ai-assistant-gradient hover:shadow-glass-hover transition-all duration-300"
        >
          <Sparkles className="h-6 w-6" />
        </Button>
      )}

      {/* Assistant dialog */}
      {isOpen && (
        <div
          className={cn(
            "fixed bottom-6 right-6 z-50 overflow-hidden transition-all duration-300 ease-in-out rounded-2xl shadow-glass-strong bg-background border border-border",
            isMinimized ? "w-64 h-16" : "w-80 sm:w-96 h-96 sm:h-[500px]",
            className
          )}
        >
          {/* Header */}
          <div 
            className="flex items-center justify-between p-4 border-b border-border bg-gradient-to-r from-primary/5 to-primary/10 cursor-pointer"
            onClick={isMinimized ? toggleOpen : undefined}
          >
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <h3 className="font-medium text-sm">Assistant IA</h3>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost" 
                size="icon" 
                className="h-8 w-8" 
                onClick={toggleMinimize}
              >
                {isMinimized ? <Maximize className="h-4 w-4" /> : <Minimize className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost" 
                size="icon" 
                className="h-8 w-8" 
                onClick={toggleOpen}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages container */}
              <div className="flex-1 p-4 space-y-4 overflow-y-auto h-[calc(100%-8rem)]">
                {messages.map((msg, index) => (
                  <div 
                    key={index}
                    className={cn(
                      "flex max-w-[85%] text-sm leading-relaxed",
                      msg.isUser ? "ml-auto" : "mr-auto"
                    )}
                  >
                    <div 
                      className={cn(
                        "rounded-2xl px-4 py-2", 
                        msg.isUser 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-muted"
                      )}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Input form */}
              <div className="p-3 border-t border-border absolute bottom-0 left-0 right-0">
                <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                  <Input
                    type="text"
                    placeholder="Posez votre question..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="submit" size="icon" className="flex-shrink-0">
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AIAssistant;
