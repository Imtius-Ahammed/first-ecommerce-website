import { useContext } from "react";
import { AuthContext } from "../Pages/Contexts/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {

    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            if (user?.email) {
                const res = await axiosSecure.get(`/users/admin/${user?.email}`)
                return res.data.admin;
            }
            else {
                return [];
            }
        }
    })

    return [isAdmin, isAdminLoading]
};

export default useAdmin;