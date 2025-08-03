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

const formSchema = z.object({
  id: z.string().optional(),
  crystal: z.string().min(1, 'Crystal name is required'),
  probability: z.coerce.number().int().min(0, 'Probability must be at least 0'),
  match2: z.coerce.number().int().min(0, 'Match 2 must be at least 0'),
  match3: z.coerce.number().int().min(0, 'Match 3 must be at least 0'),
  match4: z.coerce.number().int().min(0, 'Match 4 must be at least 0'),
  currentProbability: z.coerce
    .number()
    .int()
    .min(0, 'Current probability must be at least 0'),
  dynamic: z.boolean(),
});

type FormValues = z.infer<typeof formSchema>;

interface CrystalDropOddsFormProps {
  initialData?: Partial<any>;
  onSubmit?: (data: FormValues) => void;
}

const CrystalDropOddsForm = ({
  initialData,
  onSubmit,
}: CrystalDropOddsFormProps) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: initialData?.id || '',
      crystal: initialData?.crystal || '',
      probability: initialData?.probability || 0,
      match2: initialData?.match2 || 0,
      match3: initialData?.match3 || 0,
      match4: initialData?.match4 || 0,
      currentProbability: initialData?.currentProbability || 0,
      dynamic: initialData?.dynamic || false,
    },
  });

  const router = useRouter();

  const isEditing = Boolean(initialData?.id);

  const handleSubmit = async (data: FormValues) => {
    if (isEditing) {
      const success = await updateCrystalDropOdd(String(initialData?.id), {
        crystal: data.crystal,
        probability: data.probability,
        match2: data.match2,
        match3: data.match3,
        match4: data.match4,
        currentProbability: data.currentProbability,
        dynamic: data.dynamic,
      });

      if (success) {
        router.push('/admin/crystal-drop-odds');
      }
    } else {
      const success = await createCrystalDropOdd({
        crystal: data.crystal,
        probability: data.probability,
        match2: data.match2,
        match3: data.match3,
        match4: data.match4,
        currentProbability: data.currentProbability,
        dynamic: data.dynamic,
      });

      console.log('add', { success });

      if (success) {
        router.push('/admin/crystal-drop-odds');
      }
    }
  };

  return (
    <div className="max-w-2xl p-6 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">
          Crystal Drop Odds Configuration
        </h2>

        <p className="text-muted-foreground">
          Configure the crystal drop odds settings.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="crystal"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Crystal Name</FormLabel>

                <FormControl>
                  <Input placeholder="Enter crystal name" {...field} />
                </FormControl>

                <FormDescription>The name of the crystal.</FormDescription>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="probability"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Probability</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter probability"
                    {...field}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </FormControl>
                <FormDescription>
                  The base probability for this crystal drop.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="match2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Match 2</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter match 2 value"
                    {...field}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </FormControl>
                <FormDescription>
                  The value for matching 2 crystals.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="match3"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Match 3</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter match 3 value"
                    {...field}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </FormControl>
                <FormDescription>
                  The value for matching 3 crystals.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="match4"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Match 4</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter match 4 value"
                    {...field}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </FormControl>
                <FormDescription>
                  The value for matching 4 crystals.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="currentProbability"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current Probability</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter current probability"
                    {...field}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </FormControl>
                <FormDescription>
                  The current probability for this crystal drop.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dynamic"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Input
                    type="checkbox"
                    checked={field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                    className="w-4 h-4"
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Dynamic</FormLabel>
                  <FormDescription>
                    Enable dynamic configuration for this crystal.
                  </FormDescription>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {isEditing ? (
            <div className="flex gap-4">
              <Button type="submit" className="flex-1">
                Update Crystal Drop Odds
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => form.reset()}
                className="flex-1"
                asChild
              >
                <Link href={`/admin/crystal-drop-odds`}>Cancel</Link>
              </Button>
            </div>
          ) : (
            <div className="flex gap-4">
              <Button type="submit" className="flex-1">
                Save Crystal Drop Odds
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

export default CrystalDropOddsForm;
