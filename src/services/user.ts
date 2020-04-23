import axios from 'axios';

const API_URL = 'https://gwmceauyq1.execute-api.eu-west-3.amazonaws.com/production';

export const getMe = async (): Promise<{ name: string }> => {
  return new Promise(resolve => window.FB.api('/me', resolve));
};

export const checkMember = async (name: string): Promise<{ isMember: boolean }> => {
  const { data } = await axios.post(`${API_URL}/check-member`, { name });

  return data;
};
