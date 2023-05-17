import httpRequest from "../services/httpRequest"
import { FAQcreation } from "../types/faq";

const apiPrefix = '/Faq';

export const getFAQs = () => {
  return httpRequest.get(apiPrefix);
}

export const postFAQs = (data:FAQcreation) => {
  return httpRequest.post(apiPrefix, data);
}

export const putFAQs = (data:FAQcreation) => {
  return httpRequest.put(apiPrefix, data);
}