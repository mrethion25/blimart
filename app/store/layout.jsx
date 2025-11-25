import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
    title: "Blimart - Store Dashboard",
    description: "blimart - Store Dashboard",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}
