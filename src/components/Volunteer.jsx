import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const VolunteerForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for volunteering!");
    setData({ name: "", email: "", message: "" });
  };

  return (
    <section id="volunteer" className="py-24 bg-gray-100">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-black">
        Volunteer With Us
      </h2>

      <Card className="max-w-xl mx-auto bg-white border border-gray-200 rounded-xl shadow-sm">
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-gray-700">Name</Label>
              <Input
                id="name"
                name="name"
                value={data.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="bg-slate-100 border-gray-300 text-gray-800 placeholder:text-gray-500"
                required
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-gray-700">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="bg-slate-100 border-gray-300 text-gray-800 placeholder:text-gray-500"
                required
              />
            </div>
            <div>
              <Label htmlFor="message" className="text-gray-700">Why do you want to volunteer?</Label>
              <Textarea
                id="message"
                name="message"
                value={data.message}
                onChange={handleChange}
                placeholder="Tell us about yourself..."
                className="bg-slate-100 border-gray-300 text-gray-800 placeholder:text-gray-500"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-black hover:bg-blue-700 text-white">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

export default VolunteerForm;