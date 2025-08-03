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
  createCollectiblesGalleryTheme,
  updateCollectiblesGalleryTheme,
} from '@/services/collectibles-gallery-theme';

const formSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(2, 'Name must be at least 2 characters long'),
});

type FormValues = z.infer<typeof formSchema>;

interface CollectiblesGalleryThemeFormProps {
  initialData?: Partial<any>;
  onSubmit?: (data: FormValues) => void;
}

const CollectiblesGalleryThemeForm = ({
  initialData,
  onSubmit,
}: CollectiblesGalleryThemeFormProps) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: initialData?.id || '',
      name: initialData?.name || '',
    },
  });

  const router = useRouter();

  const isEditing = Boolean(initialData?.id);

  const handleSubmit = async (data: FormValues) => {
    if (isEditing) {
      const success = await updateCollectiblesGalleryTheme(
        String(initialData?.id),
        data,
      );

      if (success) {
        router.push('/admin/collectibles-gallery-themes');
      }
    } else {
      const success = await createCollectiblesGalleryTheme(data);

      console.log('add', { success });

      if (success) {
        router.push('/admin/collectibles-gallery-themes');
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
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter name"
                    {...field}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </FormControl>
                <FormDescription>
                  The name of the collectibles gallery theme.
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
                <Link href={`/admin/collectibles-gallery-themes`}>Cancel</Link>
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

export default CollectiblesGalleryThemeForm;
