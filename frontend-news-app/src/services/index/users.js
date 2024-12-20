import axios from "axios";

export const signup = async ({ name, email, password }) => {
  try {
    const { data } = await axios.post(
      "/api/users/register",
      {
        name,
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );
    return data;
  } catch (error) {
    if (error.response && error.response?.data?.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message);
  }
};

export const login = async ({ email, password }) => {
  try {
    const { data } = await axios.post(
      "/api/users/login",
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );
    return data;
  } catch (error) {
    if (error.response && error.response?.data?.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message);
  }
};
export const getUserProfile = async ({ token }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get("/api/users/profile", config, {
      withCredentials: true,
    });

    return data;
  } catch (error) {
    if (error.response && error.response?.data?.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message);
  }
};
export const updateProfile = async ({ token, userData }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.put(
      "/api/users/updateProfile",
      userData,
      config,
      {
        withCredentials: true,
      }
    );

    return data;
  } catch (error) {
    if (error.response && error.response?.data?.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message);
  }
};
export const updateProfilePicture = async ({ token, formData }) => {
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.put(
      "/api/users/updateProfilePicture",
      formData,
      config,
      {
        withCredentials: true,
      }
    );

    return data;
  } catch (error) {
    if (error.response && error.response?.data?.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message);
  }
};
