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
import { Textarea } from '@/components/ui/textarea';
import { createBlackMarket, updateBlackMarket } from '@/services/black-market';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { formatDateForForm } from '@/utils/date-utils';

const formSchema = z.object({
  id: z.string().optional(),
  alien: z.string().min(1, 'Alien name is required'),
  name: z.string().min(1, 'Name is required'),
  introduction: z.string().min(1, 'Introduction is required'),
  barterScreen: z.string().min(1, 'Barter screen content is required'),
  bargainScreen: z.string().min(1, 'Bargain screen content is required'),
  saleScreen: z.string().min(1, 'Sale screen content is required'),
  nextRestock: z.string().min(1, 'Next restock date is required'),
});

type FormValues = z.infer<typeof formSchema>;

interface BlackMarketFormProps {
  initialData?: Partial<any>;
  onSubmit?: (data: FormValues) => void;
}

const BlackMarketForm = ({ initialData, onSubmit }: BlackMarketFormProps) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: initialData?.id || '',
      alien: initialData?.alien || '',
      name: initialData?.name || '',
      introduction: initialData?.introduction || '',
      barterScreen: initialData?.barterScreen || '',
      bargainScreen: initialData?.bargainScreen || '',
      saleScreen: initialData?.saleScreen || '',
      nextRestock: formatDateForForm(
        initialData?.nextRestock ? initialData.nextRestock : '',
      ),
    },
  });

  const router = useRouter();

  const isEditing = Boolean(initialData?.id);

  const handleSubmit = async (data: FormValues) => {
    if (isEditing) {
      const success = await updateBlackMarket(String(initialData?.id), {
        ...data,
        nextRestock: new Date(data.nextRestock).toISOString(),
      });

      if (success) {
        router.push('/admin/black-market');
      }
    } else {
      const success = await createBlackMarket(data);

      console.log('add', { success });

      if (success) {
        router.push('/admin/black-market');
      }
    }
  };

  return (
    <div className="max-w-2xl p-6 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">Black Market Configuration</h2>
        <p className="text-muted-foreground">
          Configure the black market alien trader settings.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="alien"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Alien</FormLabel>
                <FormControl>
                  <Input placeholder="Enter alien name/type" {...field} />
                </FormControl>
                <FormDescription>
                  The alien species or character name for this trader.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter trader name" {...field} />
                </FormControl>
                <FormDescription>
                  The display name of the black market trader.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="introduction"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Introduction</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter introduction text..."
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  The introductory text shown when players first encounter this
                  trader.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="barterScreen"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Barter Screen</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter barter screen content..."
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  The text and options shown on the barter screen.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bargainScreen"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bargain Screen</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter bargain screen content..."
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  The text and options shown during bargaining negotiations.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="saleScreen"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sale Screen</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter sale screen content..."
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  The text shown when completing a sale transaction.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="nextRestock"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Next Restock</FormLabel>
                <FormControl>
                  <Input type="datetime-local" {...field} />
                </FormControl>
                <FormDescription>
                  The date and time when this trader's inventory will be
                  restocked.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {isEditing ? (
            <div className="flex gap-4">
              <Button type="submit" className="flex-1">
                Update Configuration
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => form.reset()}
                className="flex-1"
                asChild
              >
                <Link href={`/admin/black-market`}>Cancel</Link>
              </Button>
            </div>
          ) : (
            <div className="flex gap-4">
              <Button type="submit" className="flex-1">
                Save Configuration
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

export default BlackMarketForm;
