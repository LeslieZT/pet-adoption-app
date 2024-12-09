import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Spinner } from "flowbite-react";
import { useAuthStore } from "../store/Auth.store";
import { ChannelType } from "../enum/ChannelType.enum";

const AuthProviderPage: React.FC = () => {
  const navigate = useNavigate();
  const { provider } = useParams();
  const location = useLocation();
  const { signInWithOAuthCallback, setChhanel } = useAuthStore((state) => state);
  const [loading, setLoading] = useState(true);

  const queryParams = new URLSearchParams(location.search);
  const channel = queryParams.get("channel");
  const hashParams = new URLSearchParams(location.hash.slice(1));
  const accessToken = hashParams.get("access_token");
  const refreshToken = hashParams.get("refresh_token");
  const expiresIn = hashParams.get("expires_in");
  const expiresAt = hashParams.get("expires_at");

  useEffect(() => {
    if (provider && channel && accessToken && refreshToken && expiresIn && expiresAt) {
      try {
        setChhanel(channel as ChannelType);
        signInWithOAuthCallback({
          provider,
          credential: {
            accessToken,
            refreshToken,
            expiresIn: parseInt(expiresIn),
            expiresAt: parseInt(expiresAt),
          },
        });

        setTimeout(() => {
          setLoading(false);
          navigate("/home");
        }, 2000);
      } catch (error: any) {
        console.error("Error en signInWithOAuthCallback:", error);
        navigate("/error");
      }
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading && (
        <Spinner
          color="purple"
          aria-label="Purple spinner example"
          className="h-52 w-52"
        />
      )}
    </div>
  );
};

export default AuthProviderPage;
