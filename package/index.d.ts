import React from "react";

/**
 * Starts the Neon conversation session.
 * Returns a Promise that resolves when the session begins.
 */
export function startNeon(): Promise<void>;

/**
 * Ends the Neon conversation session.
 * Returns a Promise that resolves when the session ends.
 */
export function endNeon(): Promise<void>;

/**
 * Displays the Neon UI component.
 * This returns a React JSX element that can be rendered inside any page.
 */
export function displayNeon(): React.JSX.Element;

/**
 * Requests microphone permission from the user.
 * Returns a Promise that resolves when permission is granted or rejected.
 */
export function requestMicPermission(): Promise<void>;

/**
 * Toggles Neon’s audio volume (mute/unmute).
 * Returns a Promise that resolves after the volume is changed.
 */
export function toggleMute(): Promise<void>;
