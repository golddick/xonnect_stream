'use client';

import { useState, useTransition } from 'react';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { submitReview } from '@/actions/submitReview';
import { toast } from 'sonner';

export function ReviewForm({ streamId, userId }: { streamId: string; userId?: string }) {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    // if (!userId) return;

    if (!userId) {
        toast.error('You must be logged in to submit a review.');
      return;
    }

    console.log(`Submitting review for stream ${streamId} by user ${userId} with rating ${rating} and comment: "${review}"`);

    startTransition(async () => {
      try {
        await submitReview({
          userId,
          streamId,
          rating,
          comment: review,
        });
        toast.success('Review submitted successfully!');
        setSubmitted(true);
      } catch (error) {
        toast.error(`Failed to submit review. Please try again later.` + (error instanceof Error ? `: ${error.message}` : ''));
        console.error(error);
      }
    });
  };

  if (submitted) {
    return (
      <div className="text-center text-white p-6">
        <h3 className="text-2xl font-bold mb-2">Thanks for your feedback!</h3>
        <p className="text-gray-300">Your review has been submitted.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md text-center">
      <h3 className="text-xl font-bold mb-2 text-gray-800">Rate This Stream</h3>
      <div className="flex justify-center mb-4">
        {[1, 2, 3, 4, 5].map((num) => (
          <Star
            key={num}
            className={`w-6 h-6 cursor-pointer transition ${
              rating >= num ? 'fill-yellow-400 stroke-yellow-400' : 'stroke-gray-400'
            }`}
            onClick={() => setRating(num)}
          />
        ))}
      </div>
      <Textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Share your thoughts..."
        className="mb-4"
      />
      <Button onClick={handleSubmit} disabled={isPending} className="w-full">
        {isPending ? 'Submitting...' : 'Submit Review'}
      </Button>
    </div>
  );
}
