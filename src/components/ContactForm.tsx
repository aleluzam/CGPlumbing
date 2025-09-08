import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xgvlrjne");

  if (state.succeeded) {
    return (
      <div className="flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
        <p className="text-green-600 open-sans-semmibold text-left">
          Thank you for contacting us. We will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center min-h-[400px] lg:min-h-[500px] text-left">
      <h1 className="barlow-condensed-bold lg:text-5xl text-2xl sm:text-3xl md:text-4xl text-center">
        Tell us your inquiries
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4 p-10">
        <label
          htmlFor="name"
          className="block text-sm font-medium open-sans-semibold text-left"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className="w-full px-3 py-2 border border-gray-300 rounded text-left"
        />
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
          className="text-red-500 text-sm text-left"
        />

        <label
          htmlFor="email"
          className="block text-sm font-medium open-sans-semibold text-left"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="w-full px-3 py-2 border border-gray-300 rounded text-left"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-500 text-sm text-left"
        />

        <label
          htmlFor="message"
          className="block text-sm open-sans-semibold font-medium text-left"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full px-3 py-2 border border-gray-300 rounded text-left"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-red-500 text-sm text-left"
        />

        <div className="text-left">
          <button
            type="submit"
            disabled={state.submitting}
            className="px-4 py-2 bg-blue-perfect text-white rounded hover:bg-[#3a9b8e] disabled:opacity-50"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
