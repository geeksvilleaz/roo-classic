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
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  createCoolingTankTunnel,
  updateCoolingTankTunnel,
} from '@/services/cooling-tank-tunnels';

const formSchema = z.object({
  id: z.string().optional(),
  tunnel: z.string().min(1, 'Tunnel name is required'),
  description: z.string().optional(),
  probability: z.coerce
    .number()
    .int()
    .min(0, 'Probability must be at least 0')
    .max(100, 'Probability must be at most 100'),
});

type FormValues = z.infer<typeof formSchema>;

interface CoolingTankTunnelFormProps {
  initialData?: Partial<any>;
  onSubmit?: (data: FormValues) => void;
}

const CoolingTankTunnelForm = ({
  initialData,
  onSubmit,
}: CoolingTankTunnelFormProps) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: initialData?.id || '',
      tunnel: initialData?.tunnel || '',
      description: initialData?.description || '',
      probability: initialData?.probability || 0,
    },
  });

  const router = useRouter();

  const isEditing = Boolean(initialData?.id);

  const handleSubmit = async (data: FormValues) => {
    if (isEditing) {
      const success = await updateCoolingTankTunnel(String(initialData?.id), {
        tunnel: data.tunnel,
        description: data.description,
        probability: data.probability,
      });

      if (success) {
        router.push('/admin/cooling-tank-tunnels');
      }
    } else {
      const success = await createCoolingTankTunnel({
        tunnel: data.tunnel,
        description: data.description,
        probability: data.probability,
      });

      console.log('add', { success });

      if (success) {
        router.push('/admin/cooling-tank-tunnels');
      }
    }
  };

  return (
    <div className="max-w-2xl p-6 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">
          Cooling Tank Tunnel Configuration
        </h2>
        <p className="text-muted-foreground">
          Configure the cooling tank tunnel settings.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="tunnel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tunnel Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter tunnel name" {...field} />
                </FormControl>
                <FormDescription>
                  The name identifier for this cooling tank tunnel.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter tunnel description" {...field} />
                </FormControl>
                <FormDescription>
                  A detailed description of this cooling tank tunnel.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="probability"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Probability (%)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter probability (0-100)"
                    {...field}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </FormControl>
                <FormDescription>
                  The probability percentage for this tunnel (0-100).
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {isEditing ? (
            <div className="flex gap-4">
              <Button type="submit" className="flex-1">
                Update Tunnel
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => form.reset()}
                className="flex-1"
                asChild
              >
                <Link href={`/admin/cooling-tank-tunnels`}>Cancel</Link>
              </Button>
            </div>
          ) : (
            <div className="flex gap-4">
              <Button type="submit" className="flex-1">
                Save Tunnel
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

export default CoolingTankTunnelForm;
