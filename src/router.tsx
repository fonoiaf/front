import { lazy, Suspense } from 'react';
import { AuthLayout } from '#/_error/layouts/auth';
import { DashboardLayout } from '#/_error/layouts/dashboard';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import { Fallback } from '#/components/fallback';

// ----------------------------------------------------------------------

export const HomePage = lazy(() => import('src/pages/home'));
export const MarketingPage = lazy(() => import('src/pages/home/MarketingPage'));
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
export function Router() {
  return useRoutes([
    // { element: <HomePage />, index: true },
    { element: <MarketingPage />, index: true },
    {
      element: (
        <DashboardLayout>
          <Suspense fallback={<Fallback />}>
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
