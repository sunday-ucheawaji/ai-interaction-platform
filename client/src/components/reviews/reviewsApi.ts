import axios from 'axios';

export type Review = {
   id: string;
   author: string;
   content: string;
   rating: number;
   createdAt: string;
};

export type GetReviewsResponse = {
   summary: string | null;
   reviews: Review[];
};

export type SummaryResponse = {
   summary: string;
};

export const reviewsApi = {
   fetchReviewData(productId: number) {
      return axios
         .get<GetReviewsResponse>(`/api/products/${productId}/reviews`)
         .then((res) => res.data);
   },

   summarizeReviews(productId: number) {
      return axios
         .post<SummaryResponse>(`/api/products/${productId}/reviews/summarize`)
         .then((res) => res.data);
   },
};
