/* eslint-disable no-useless-catch */
import axios from "axios";

const BASE_URL = "http://localhost:8081/api/v1";

export const login = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const indexPlace = async (params) => {
  try {
    const response = await axios.get(`${BASE_URL}/places`, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPlaceById = async (id, params) => {
  try {
    const response = await axios.get(`${BASE_URL}/places/${id}`, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createPlace = async (place, accessToken) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const response = await axios.post(
      `${BASE_URL}/places?location_id=1`,
      place,
      config
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deletePlace = async (id, accessToken) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const response = await axios.delete(`${BASE_URL}/places/${id}`, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};
