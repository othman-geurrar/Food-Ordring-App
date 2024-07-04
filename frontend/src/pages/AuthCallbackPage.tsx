import { useCreateUserMutation } from "@/api/User/UserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallbackPage = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const [createUser, { isError, isLoading, isSuccess }] = useCreateUserMutation();
  const navigate = useNavigate();
  const hasCreatedUser = useRef(false);

  useEffect(() => {
    const createUserInApi = async () => {
      if (user?.sub && user?.email && !hasCreatedUser.current) {
        try {
          const token = await getAccessTokenSilently();
          const newUser = { auth0Id: user.sub, email: user.email };
          console.log(newUser);
          createUser({ user: newUser, token });
          hasCreatedUser.current = true;
        } catch (error) {
          console.error('Failed to get access token', error);
        }
      }
    };

    createUserInApi();
  }, [createUser, user, getAccessTokenSilently]);

  // Use the mutation state variables
  useEffect(() => {
    if (isLoading) {
      console.log('Creating user...');
    }
  }, [isLoading]);

  useEffect(() => {
    if (isError) {
      console.error('Error creating user');
    }
  }, [isError]);

  useEffect(() => {
    if (isSuccess) {
      console.log('User created successfully');
      navigate("/");
    }
  }, [isSuccess, navigate]);

  return <>Loading...</>;
};

export default AuthCallbackPage;
