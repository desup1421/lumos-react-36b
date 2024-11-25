import React from 'react';
import { useTheme } from './themeContext';

export default function ThemeButton() {
    const theme = useTheme();
    return (
        <button style={{ backgroundColor: theme }}>
            Click Me
        </button>
    )
}