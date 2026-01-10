import { useAuth } from "../hooks/useAuth";
import { LogoutButton } from "./LogoutButton";

export function Profile() {
    const { state } = useAuth();


    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <div className='rounded-lg border border-black p-2 w-full md:w-1/2 flex flex-col space-y-2 items-center'>
                <h1 className='font-bold text-2xl'>Profile</h1>

                <p>{state.isAuthenticated ? `${state.user.username} Logged In` : 'User not logged in'}</p>
                <div className='flex flex-row space-x-4'>
                    <LogoutButton />
                </div>
            </div>
        </div>
    )
}
