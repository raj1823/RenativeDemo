import React from 'react';
import { useRouter } from 'next/router';
import { View } from 'react-native';
import Menu from '../components/Menu';
import { themeStyles, ThemeProvider } from '../config';

export default function MyApp({ Component, pageProps }) {
    const router = useRouter();
    return (
        <ThemeProvider>
            <Menu focusKey="menu" router={router} />
            <View style={themeStyles.appContainer}>
                <Component {...pageProps} />
            </View>
        </ThemeProvider>
    );
}
