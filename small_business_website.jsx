import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function BusinessWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-white shadow-sm">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4"
        >
          Your Business Name
        </motion.h1>
        <p className="text-lg mb-6">We provide high-quality services to help you succeed.</p>
        <Button className="rounded-2xl px-6 py-2">Contact Us</Button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {["Service One", "Service Two", "Service Three"].map((service, i) => (
          <Card key={i} className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">{service}</h2>
              <p>Short description of {service.toLowerCase()}.</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="max-w-2xl mx-auto">
          We are a small business dedicated to delivering excellent products and services to our customers.
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-6">Email: your@email.com | Phone: +123 456 7890</p>
        <Button className="rounded-2xl px-6 py-2">Send Message</Button>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-100">
        <p>© {new Date().getFullYear()} Your Business Name. All rights reserved.</p>
      </footer>
    </div>
  );
}
