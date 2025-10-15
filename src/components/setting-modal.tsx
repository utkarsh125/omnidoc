"use client";

import { LockKeyIcon, UserIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { Modal } from "./modal";
import Image from "next/image";
import axios from "axios";
import { SpotlightButton } from "./ui/spotlight-button";

interface SettingsModalProps{
    isOpen: boolean;
    onClose: () => void;
}

export function SettingsModal(
    { isOpen, onClose} : SettingsModalProps
) {

    const [activeTab, setActiveTab] = useState('profile');
    const [displayName, setDisplayName] = useState('');
    const [selectedAvatar, setSelectedAvatar] = useState('vibrent_2.png');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const avatars = [
        'vibrent_2.png', 'vibrent_6.png', 'vibrent_7.png', 
        'vibrent_8.png', 'vibrent_9.png', 'vibrent_27.png'
    ];

    const handleSaveProfile = async () => {
        try {
            await axios.patch("/api/auth/user-details", 
                { 
                    name: displayName,
                    avatar: selectedAvatar 
                },
                { withCredentials: true }
            );
            onClose();
        } catch (error) {
            console.error("Error updating profile:", error);
            alert("Failed to update profile");
        }
    };

    const handleChangePassword = async () => {
        if (newPassword !== confirmPassword) {
            setPasswordError('Passwords do not match');
            return;
        }

        try {
            await axios.post("/api/auth/change-password", 
                { 
                    currentPassword,
                    newPassword 
                },
                { withCredentials: true }
            );
            onClose();
        } catch (error) {
            console.error("Error changing password:", error);
            alert("Failed to change password");
        }
    };

    const tabs = [
        { id: 'profile', label: 'Profile', icon: <UserIcon weight="duotone"/>},
        { id: 'password', label: 'Password', icon: <LockKeyIcon weight="duotone"/>}
    ];

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Settings">
            
            <div className="flex min-h-[500px] max-h-[70vh]">
                {/* sidebar */}
                <div className="w-48 border-r pr-4">
                    <nav className="space-y-1">
                        {tabs.map((tab) => (
                            <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                              activeTab === tab.id
                                ? 'bg-blue-50 text-blue-700'
                                : 'text-gray-600 hover:bg-gray-50'
                            }`}
                          >
                            <span className="text-lg">{tab.icon}</span>
                            <span className="text-sm font-medium">{tab.label}</span>
                          </button>
                        ))}
                    </nav>
                </div>

                {/* Content  */}

                <div className="flex-1 pl-6 overflow-y-auto">

                    {activeTab === 'profile' && (
                        <div className="space-y-4">
                            <h3 className="text-lg text-gray-900">Profile Settings</h3>
                            <div className="space-y-3">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Display Name
                                    </label>
                                    <input 
                                    type="text"
                                    value={displayName}
                                    onChange={(e) => setDisplayName(e.target.value)}
                                    placeholder="Display Name"
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-3">
                                        Avatar
                                    </label>
                                    <div className="grid grid-cols-3 gap-4">
                                        {avatars.map((avatar) => (
                                            <div
                                                key={avatar}
                                                onClick={() => setSelectedAvatar(avatar)}
                                                className={`cursor-pointer p-2 rounded-lg transition-all flex items-center justify-center ${
                                                    selectedAvatar === avatar
                                                        ? 'bg-blue-50'
                                                        : 'hover:bg-gray-50'
                                                }`}
                                            >
                                                <div className={`rounded-full border-2 transition-all ${
                                                    selectedAvatar === avatar
                                                        ? 'border-blue-500'
                                                        : 'border-gray-200'
                                                }`}>
                                                    <Image
                                                        src={`/${avatar}`}
                                                        width={60}
                                                        height={60}
                                                        className="rounded-full"
                                                        alt="Avatar"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'password' && (
                        <div className="space-y-4">
                            <h3 className="text-lg text-gray-900">Change Password</h3>
                            <div className="space-y-3">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Current Password
                                    </label>
                                    <input 
                                    type="password"
                                    value={currentPassword}
                                    onChange={(e) => setCurrentPassword(e.target.value)}
                                    placeholder="Enter current password"
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        New Password
                                    </label>
                                    <input 
                                    type="password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    placeholder="Enter new password"
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Confirm New Password
                                    </label>
                                    <input 
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => {
                                        setConfirmPassword(e.target.value);
                                        if (e.target.value !== newPassword) {
                                            setPasswordError('Passwords do not match');
                                        } else {
                                            setPasswordError('');
                                        }
                                    }}
                                    placeholder="Confirm new password"
                                    className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                                        passwordError ? 'border-red-300' : 'border-gray-300'
                                    }`}
                                    />
                                    {passwordError && (
                                        <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end mt-6 pt-4 border-t">
                <SpotlightButton
                    onClick={activeTab === 'profile' ? handleSaveProfile : handleChangePassword}
                    innerColor="rgb(200,220,255)"
                    outerColor="rgb(100,150,255)"
                    hoverInnerColor="rgb(180,200,255)"
                    hoverOuterColor="rgb(80,130,255)"
                >
                    {activeTab === 'profile' ? 'Save Profile' : 'Change Password'}
                </SpotlightButton>
            </div>

        </Modal>
    )


}