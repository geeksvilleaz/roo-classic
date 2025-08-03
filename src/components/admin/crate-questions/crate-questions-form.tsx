'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  createCrystalDropOdd,
  updateCrystalDropOdd,
} from '@/services/crystal-drop-odds';
import {
  createCrateQuestion,
  updateCrateQuestion,
} from '@/services/crate-questions';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  id: z.string().optional(),
  question: z.string().min(1, 'Question is required'),
  questionCode: z.string().min(1, 'Question code is required'),
  answer: z.string().min(1, 'Answer is required'),
});

type FormValues = z.infer<typeof formSchema>;

interface CrateQuestionFormProps {
  initialData?: Partial<any>;
  onSubmit?: (data: FormValues) => void;
}

const CrateQuestionForm = ({
  initialData,
  onSubmit,
}: CrateQuestionFormProps) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: initialData?.id || '',
      question: initialData?.question || '',
      questionCode: initialData?.questionCode || '',
      answer: initialData?.answer || '',
    },
  });

  const router = useRouter();

  const isEditing = Boolean(initialData?.id);

  const handleSubmit = async (data: FormValues) => {
    if (isEditing) {
      const success = await updateCrateQuestion(String(initialData?.id), {
        question: data.question,
        questionCode: data.questionCode,
        answer: data.answer,
      });

      if (success) {
        router.push('/admin/crate-questions');
      }
    } else {
      const success = await createCrateQuestion({
        question: data.question,
        questionCode: data.questionCode,
        answer: data.answer,
      });

      console.log('add', { success });

      if (success) {
        router.push('/admin/crate-questions');
      }
    }
  };

  return (
    <div className="max-w-2xl p-6 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">
          Crate Question Configuration
        </h2>
        <p className="text-muted-foreground">
          Configure the crate question settings.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="question"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Question</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter question" {...field} />
                </FormControl>
                <FormDescription>
                  The question text for this crate question.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="questionCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Question Code</FormLabel>
                <FormControl>
                  <Input placeholder="Enter question code" {...field} />
                </FormControl>
                <FormDescription>
                  A unique code identifier for this question.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="answer"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Answer</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter answer" {...field} />
                </FormControl>
                <FormDescription>
                  The correct answer for this question.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {isEditing ? (
            <div className="flex gap-4">
              <Button type="submit" className="flex-1">
                Update Question
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => form.reset()}
                className="flex-1"
                asChild
              >
                <Link href={`/admin/crate-questions`}>Cancel</Link>
              </Button>
            </div>
          ) : (
            <div className="flex gap-4">
              <Button type="submit" className="flex-1">
                Save Question
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => form.reset()}
                className="flex-1"
              >
                Reset Form
              </Button>
            </div>
          )}
        </form>
      </Form>
    </div>
  );
};

export default CrateQuestionForm;
