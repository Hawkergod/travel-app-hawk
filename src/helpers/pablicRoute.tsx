import { Navigate } from "react-router-dom";

interface IProps {
  component: React.ReactElement;
  redirectTo: string;
  isLogin: boolean;
}

export default function PublicRoute({
  isLogin,
  component,
  redirectTo,
}: IProps): React.ReactElement {
  return isLogin ? component : <Navigate to={redirectTo} />;
}
