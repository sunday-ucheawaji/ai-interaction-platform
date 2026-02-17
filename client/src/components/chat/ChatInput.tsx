import { type KeyboardEvent } from 'react';
import { Button } from '../ui/button';
import { FaArrowUp } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

export type ChatFormData = {
   prompt: string;
};

type Props = {
   onSubmit: (data: ChatFormData) => void;
};

const ChatInput = ({ onSubmit }: Props) => {
   const { register, handleSubmit, reset, formState } = useForm<ChatFormData>();

   const handleFormSubmit = handleSubmit(
      (data) => {
         reset({ prompt: '' });
         onSubmit(data);
      },
      (error) => console.log(error)
   );

   const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey) {
         e.preventDefault();
         handleFormSubmit();
      }
   };

   return (
      <form
         onSubmit={handleFormSubmit}
         onKeyDown={handleKeyDown}
         className="flex flex-col items-end gap-2 border-2 p-4 rounded-3xl"
      >
         <textarea
            {...register('prompt', {
               required: true,
               validate: (data) => data.trim().length > 0,
            })}
            autoFocus
            placeholder="Ask anything"
            maxLength={1000}
            className="w-full border-0 focus:outline-0 resize-none"
         />
         <Button disabled={!formState.isValid} className="rounded-full w-9 h-9">
            <FaArrowUp />
         </Button>
      </form>
   );
};

export default ChatInput;
