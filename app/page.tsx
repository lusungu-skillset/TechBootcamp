'use client';

import React from "react"

import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle2, Sparkles, Users, Calendar, Clock } from 'lucide-react';

export default function BootcampRegistration() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await axios.post(
        'https://formspree.io/f/xojwvpda',
        formData,
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      if (response.status === 200) {
        window.location.href = 'https://www.facebook.com/share/1JrW2S38Zr/?mibextid=wwXIfr';
      } else {
        alert('There was an error submitting the form. Please try again.');
        setIsSubmitting(false);
      }
    } catch (error) {
      alert('There was an error submitting the form. Please try again.');
      setIsSubmitting(false);
    }
  };

  const benefits = [
    { icon: Sparkles, text: 'Learn AI-powered development' },
    { icon: Users, text: 'Join a vibrant community' },
    { icon: Calendar, text: 'Flexible schedule' },
    { icon: Clock, text: 'Lifetime access to materials' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a2e4a] via-[#234567] to-[#1e3a5f] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 lg:py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 lg:mb-12">
            <div className="flex justify-center mb-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#d4af37]/20 border-2 border-[#d4af37]/30 bg-gradient-to-br from-[#1e3a5f] to-[#234567] p-6">
                <Image
                  src="/logo.jpeg"
                  alt="TechPact Systems Logo"
                  width={500}
                  height={250}
                  className="w-full max-w-md lg:max-w-lg rounded-xl"
                  priority
                />
              </div>
            </div>
            <div className="inline-block px-4 py-1.5 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full mb-4">
              <span className="text-[#d4af37] text-sm font-medium">FREE BOOTCAMP</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Info */}
            <div className="space-y-8 order-2 lg:order-1">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight text-balance">
                  Master AI Web Development
                </h1>
                <p className="text-lg text-white/80 text-pretty leading-relaxed">
                  Join our free bootcamp and learn how to build modern, AI-powered web applications. 
                  No experience required – we'll guide you every step of the way.
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-[#d4af37] mb-4">What You'll Get:</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-[#d4af37]/20 hover:border-[#d4af37]/40 transition-colors"
                    >
                      <benefit.icon className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                      <span className="text-white/90 text-sm">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial-style section */}
              <div className="bg-[#d4af37]/10 backdrop-blur-sm border border-[#d4af37]/30 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-[#d4af37]" />
                  <span className="text-[#d4af37] font-semibold">Limited Seats Available</span>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Secure your spot today and start your journey into the exciting world of AI web development. 
                  Join hundreds of students already enrolled.
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="order-1 lg:order-2">
              <div className="bg-white/10 backdrop-blur-md border-2 border-[#d4af37]/40 rounded-2xl p-6 lg:p-8 shadow-2xl lg:sticky lg:top-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                    Register Now
                  </h2>
                  <p className="text-white/70 text-sm">
                    Complete the form below to secure your spot
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label 
                      htmlFor="name" 
                      className="text-white font-medium text-sm"
                    >
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="paul tech"
                      required
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField('')}
                      className={`bg-[#0f1c2e] border-2 text-white placeholder:text-white/40 h-12 transition-all ${
                        focusedField === 'name' 
                          ? 'border-[#e5c158] ring-2 ring-[#d4af37]/20' 
                          : 'border-[#d4af37]/50 hover:border-[#d4af37]'
                      }`}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label 
                      htmlFor="email" 
                      className="text-white font-medium text-sm"
                    >
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tech@example.com"
                      required
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField('')}
                      className={`bg-[#0f1c2e] border-2 text-white placeholder:text-white/40 h-12 transition-all ${
                        focusedField === 'email' 
                          ? 'border-[#e5c158] ring-2 ring-[#d4af37]/20' 
                          : 'border-[#d4af37]/50 hover:border-[#d4af37]'
                      }`}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label 
                      htmlFor="phone" 
                      className="text-white font-medium text-sm"
                    >
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+265 99 000-0000"
                      required
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField('')}
                      className={`bg-[#0f1c2e] border-2 text-white placeholder:text-white/40 h-12 transition-all ${
                        focusedField === 'phone' 
                          ? 'border-[#e5c158] ring-2 ring-[#d4af37]/20' 
                          : 'border-[#d4af37]/50 hover:border-[#d4af37]'
                      }`}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label 
                      htmlFor="experience" 
                      className="text-white font-medium text-sm"
                    >
                      Programming Experience
                    </Label>
                    <select
                      id="experience"
                      name="experience"
                      onFocus={() => setFocusedField('experience')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full h-12 px-4 py-2 bg-[#0f1c2e] border-2 text-white rounded-md focus:outline-none transition-all ${
                        focusedField === 'experience' 
                          ? 'border-[#e5c158] ring-2 ring-[#d4af37]/20' 
                          : 'border-[#d4af37]/50 hover:border-[#d4af37]'
                      }`}
                      defaultValue=""
                    >
                      <option value="" disabled>Select your level</option>
                      <option value="none">No Experience</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#d4af37] hover:bg-[#e5c158] text-[#0f1c2e] font-bold text-base h-12 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg shadow-[#d4af37]/20"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      'Secure Your Spot'
                    )}
                  </Button>

                  <p className="text-center text-xs text-white/60 leading-relaxed">
                    By registering, you agree to receive updates about the bootcamp via email and will be redirected to our Facebook community.
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center">
            <p className="text-white/70 text-sm">
              Questions? Reach out at{' '}
              <a 
                href="mailto:info@techpact.com" 
                className="text-[#d4af37] hover:text-[#e5c158] underline transition-colors"
              >
                techpact25@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
