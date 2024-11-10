import { baseApi } from './baseApi';

const specialtiesApi = baseApi.injectEndpoints({
  endpoints: build => ({
    createSpecialty: build.mutation({
      query: data => ({
        url: '/specialties',
        method: 'POST',
        contentType: 'multipart/form-data',
        data,
      }),
    }),
    getAllSpecialties: build.query({
      query: data => ({
        url: '/specialties',
        method: 'GET',
      }),
    }),
  }),
});

export const { useCreateSpecialtyMutation, useGetAllSpecialtiesQuery } =
  specialtiesApi;
