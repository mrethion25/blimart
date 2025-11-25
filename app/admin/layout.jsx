import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "Blimart - Admin",
    description: "blimart - Admin",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
