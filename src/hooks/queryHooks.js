import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useSetValue = (key) => {
  const queryClient = useQueryClient();
  return (state) => queryClient.setQueryData(key, state);
};

export const useGetValue = (key, initialData) => {
  return useQuery(key, {
    initialData,
    staleTime: Infinity,
  }).data;
};
