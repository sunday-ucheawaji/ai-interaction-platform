import { useMutation, useQuery } from '@tanstack/react-query';
import StarRating from './StarRating';
import { Button } from '../ui/button';
import { HiSparkles } from 'react-icons/hi2';
import ReviewSkeleton from './ReviewSkeleton';
import {
   reviewsApi,
   type GetReviewsResponse,
   type SummaryResponse,
} from './reviewsApi';

type Props = {
   productId: number;
};

const ReviewList = ({ productId }: Props) => {
   const queryData = useQuery<GetReviewsResponse>({
      queryKey: ['reviews', productId],
      queryFn: () => reviewsApi.fetchReviewData(productId),
   });

   const summaryMutation = useMutation<SummaryResponse>({
      mutationFn: () => reviewsApi.summarizeReviews(productId),
   });

   const currentSummary =
      queryData.data?.summary || summaryMutation.data?.summary;

   if (queryData.isLoading) {
      return (
         <div className="flex flex-col gap-5">
            {[1, 2, 3].map((i) => (
               <ReviewSkeleton key={i} />
            ))}
         </div>
      );
   }

   if (queryData.error) {
      return (
         <p className="text-red-500">Could not fetch reviews. Try again!</p>
      );
   }

   if (!queryData.data?.reviews.length) {
      return null;
   }

   return (
      <div>
         <div className="mb-5">
            {currentSummary ? (
               <p>{currentSummary}</p>
            ) : (
               <div>
                  <Button
                     onClick={() => summaryMutation.mutate()}
                     className="cursor-pointer"
                     disabled={summaryMutation.isPending}
                  >
                     <HiSparkles />
                     Summarize
                  </Button>
                  {summaryMutation.isPending && (
                     <div className="py-3">
                        <ReviewSkeleton />
                     </div>
                  )}
                  {summaryMutation.isError && (
                     <p className="text-red-500">
                        Could not summarize reviews. Please try again!
                     </p>
                  )}
               </div>
            )}
         </div>
         <div className="flex flex-col gap-5">
            {queryData.data?.reviews.map((review) => (
               <div key={review.id}>
                  <div className="font-semibold">{review.author}</div>
                  <div>
                     <StarRating value={review.rating} />
                  </div>
                  <p className="py-2">{review.content}</p>
               </div>
            ))}
         </div>
      </div>
   );
};

export default ReviewList;
