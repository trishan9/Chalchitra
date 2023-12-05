import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

//@ts-expect-error
const CheckoutForm = ({ form }) => {
  return (
    <div className="w-[65%] p-8 py-10 bg-background-secondary border border-dark-border rounded-md flex gap-8 flex-col">
      <p className="text-xl font-semibold">Information</p>
      <FormField
        control={form.control}
        name="fullName"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-base">Full Name*</FormLabel>

            <FormControl className="">
              <Input
                placeholder="eg. Jane Copper"
                {...field}
                className="px-4 py-3 border bg-background-secondary border-dark-border text-text-secondary"
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <div className="flex items-center justify-between gap-6">
        <div className="w-full">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Email*</FormLabel>

                <FormControl className="">
                  <Input
                    type="email"
                    placeholder="eg. janecopper@xyz.com"
                    {...field}
                    className="px-4 py-3 border bg-background-secondary border-dark-border text-text-secondary"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="w-full">
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Address*</FormLabel>

                <FormControl className="">
                  <Input
                    placeholder="eg. Baneshwor"
                    {...field}
                    className="px-4 py-3 border bg-background-secondary border-dark-border text-text-secondary"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="flex items-center justify-between gap-6">
        <div className="w-full">
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Country*</FormLabel>

                <FormControl className="">
                  <Input
                    placeholder="eg. Nepal"
                    {...field}
                    className="px-4 py-3 border bg-background-secondary border-dark-border text-text-secondary"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="w-full">
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">State*</FormLabel>

                <FormControl className="">
                  <Input
                    placeholder="eg. Bagmati"
                    {...field}
                    className="px-4 py-3 border bg-background-secondary border-dark-border text-text-secondary"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="flex items-center justify-between gap-6">
        <div className="w-full">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">City*</FormLabel>

                <FormControl className="">
                  <Input
                    placeholder="eg. Kathmandu"
                    {...field}
                    className="px-4 py-3 border bg-background-secondary border-dark-border text-text-secondary"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="w-full">
          <FormField
            control={form.control}
            name="zipCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Zip/Post Code*</FormLabel>

                <FormControl className="">
                  <Input
                    placeholder="eg. 446600"
                    {...field}
                    className="px-4 py-3 border bg-background-secondary border-dark-border text-text-secondary"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
