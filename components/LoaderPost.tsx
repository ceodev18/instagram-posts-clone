import React from 'react';
import { View, ActivityIndicator, Dimensions, Platform } from 'react-native';

interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  const osName = Platform.OS;
  const screenHeight = Dimensions.get('screen').height;

  if (!isLoading) return null;

  return (
    <View
      style={{
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: screenHeight,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        zIndex: 10,
      }}
    >
      <ActivityIndicator
        animating={isLoading}
        color="#fff"
        size={osName === 'ios' ? 'large' : 50}
      />
    </View>
  );
};

export default Loader;
