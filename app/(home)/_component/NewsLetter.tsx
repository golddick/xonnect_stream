import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const NewsLetter = () => {
  return (
    <section className="py-16 px-8 bg-white text-black">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
                        <p className="mb-8 text-gray-600">
                            Get updates on new releases, exclusive offers, and personalized recommendations.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Input
                                type="email"
                                placeholder="Your email address"
                                className="px-4 py-3 rounded-md border border-gray-300 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent"
                            />
                            <Button className="bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-500 transition duration-300">
                                Subscribe
                            </Button>
                        </div>
                        <p className="mt-4 text-sm text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
                    </div>
                </section>
  )
}

export default NewsLetter
