/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navigate } from 'react-router-dom';
import { useAppContent } from '../context/AppContext';

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { isAuthenticated } = useAppContent();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
