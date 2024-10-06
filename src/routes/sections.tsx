import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import { varAlpha } from 'src/theme/styles';
import { AuthLayout } from 'src/layouts/auth';
import { DashboardLayout } from 'src/layouts/dashboard';

// ----------------------------------------------------------------------

export const HomePage = lazy(() => import('src/pages/home'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const WordPage = lazy(() => import('src/pages/word'));
export const UserPage = lazy(() => import('src/pages/user'));
export const FigurePage = lazy(() => import('src/pages/figure'));
export const PhonemePage = lazy(() => import('src/pages/phoneme'));
export const PatientPage = lazy(() => import('src/pages/patient'));
export const DashboardPage = lazy(() => import('src/pages/dashboard'));
export const TranscriptionPage = lazy(() => import('src/pages/transcription'));
export const SignInPage = lazy(() => import('src/pages/sign-in'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

const renderFallback = (
  <Box display="flex" alignItems="center" justifyContent="center" flex="1 1 auto">
    <LinearProgress
      sx={{
        width: 1,
        maxWidth: 320,
        bgcolor: (theme) => varAlpha(theme.vars.palette.text.primaryChannel, 0.16),
        [`& .${linearProgressClasses.bar}`]: { bgcolor: 'text.primary' },
      }}
    />
  </Box>
);

export function Router() {
  return useRoutes([
    { element: <HomePage />, path: '/' },
    {
      element: (
        <DashboardLayout>
          <Suspense fallback={renderFallback}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      path: 'dashboard',
      children: [
        { element: <DashboardPage />, index: true },
        { path: 'blog', element: <BlogPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'word', element: <WordPage /> },
        { path: 'figure', element: <FigurePage /> },
        { path: 'phoneme', element: <PhonemePage /> },
        { path: 'patient', element: <PatientPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'transcription', element: <TranscriptionPage /> },
      ],
    },
    {
      path: 'sign-in',
      element: (
        <AuthLayout>
          <SignInPage />
        </AuthLayout>
      ),
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
}
