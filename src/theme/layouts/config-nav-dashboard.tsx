import { Label } from '#/components/label';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor width="100%" height="100%" src={`/assets/icons/navbar/${name}.svg`} />
);

export const navData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: icon('ic-analytics'),
  },
  {
    title: 'Fonemas',
    path: '/dashboard/phoneme',
    icon: icon('ic-phoneme'),
  },
  {
    title: 'Palavras',
    path: '/dashboard/word',
    icon: icon('ic-word'),
  },
  {
    title: 'Figuras',
    path: '/dashboard/figure',
    icon: icon('ic-figure'),
  },
  {
    title: 'Pacientes',
    path: '/dashboard/patient',
    icon: icon('ic-patient'),
  },
  {
    title: 'Transcrições',
    path: '/dashboard/transcription',
    icon: icon('ic-transcription'),
  },
  {
    title: 'Usuários',
    path: '/dashboard/user',
    icon: icon('ic-user'),
  },
  {
    title: 'Product',
    path: '/dashboard/products',
    icon: icon('ic-cart'),
    info: (
      <Label color="error" variant="inverted">
        +3
      </Label>
    ),
  },
  {
    title: 'Blog',
    path: '/dashboard/blog',
    icon: icon('ic-blog'),
  },
  // {
  //   title: 'Sign in',
  //   path: '/sign-in',
  //   icon: icon('ic-lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic-disabled'),
  // },
];
