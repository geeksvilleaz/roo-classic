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
  createCollectiblesSetting,
  updateCollectiblesSetting,
} from '@/services/collectibles-settings';
import { formatDateForForm } from '@/utils/date-utils';

const formSchema = z.object({
  id: z.string().optional(),
  loginDays: z.coerce.number().int().min(1, 'Login days must be at least 1'),
  indexIntervalDays: z.coerce
    .number()
    .int()
    .min(1, 'Index interval days must be at least 1'),
  lastIndexDate: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface CollectiblesSettingsFormProps {
  initialData?: Partial<any>;
  onSubmit?: (data: FormValues) => void;
}

const CollectiblesSettingsForm = ({
  initialData,
  onSubmit,
}: CollectiblesSettingsFormProps) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: initialData?.id || '',
      loginDays: initialData?.loginDays || 1,
      indexIntervalDays: initialData?.indexIntervalDays || 1,
      lastIndexDate: formatDateForForm(initialData?.lastIndexDate || ''),
    },
  });

  const router = useRouter();

  const isEditing = Boolean(initialData?.id);

  const handleSubmit = async (data: FormValues) => {
    if (isEditing) {
      const success = await updateCollectiblesSetting(String(initialData?.id), {
        ...data,
        lastIndexDate: new Date(String(data.lastIndexDate)).toISOString(),
      });

      if (success) {
        router.push('/admin/collectibles-settings');
      }
    } else {
      const success = await createCollectiblesSetting({
        ...data,
        lastIndexDate: new Date(String(data.lastIndexDate)).toISOString(),
      });

      console.log('add', { success });

      if (success) {
        router.push('/admin/collectibles-settings');
      }
    }
  };

  return (
    <div className="max-w-2xl p-6 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">
          Collectibles Gallery Theme Configuration
        </h2>
        <p className="text-muted-foreground">
          Configure the collectibles gallery theme settings.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="loginDays"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Login Days</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter login days"
                    {...field}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </FormControl>
                <FormDescription>
                  The number of days a user must log in to access certain
                  features.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="indexIntervalDays"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Index Interval Days</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter index interval days"
                    {...field}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </FormControl>
                <FormDescription>
                  The interval in days for indexing collectibles.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastIndexDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Index Date</FormLabel>
                <FormControl>
                  <Input type="datetime-local" {...field} />
                </FormControl>
                <FormDescription>
                  The date and time when the last indexing occurred.
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
                <Link href={`/admin/collectibles-settings`}>Cancel</Link>
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

export default CollectiblesSettingsForm;
