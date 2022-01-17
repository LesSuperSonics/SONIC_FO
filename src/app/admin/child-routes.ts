export const childRoutes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    data: { icon: 'dashboard', text: 'Dashboard' }
  },
  {
    path: 'tables',
    loadChildren: () =>
      import('./tables/tables.module').then(m => m.TablesModule),
    data: { icon: 'supervisor_account', text: 'Candidates' }
  },
  {
    path: 'charts',
    loadChildren: () =>
      import('./charts/charts.module').then(m => m.ChartsModule),
    data: { icon: 'bar_chart', text: 'Charts' }
  },
  {
    path: 'help',
    loadChildren: () => import('./help/help.module').then(m => m.HelpModule),
    data: { icon: 'contact_support', text: 'Help' }
  },
  {
    path: 'statuses',
    loadChildren: () => import('./status/status.module').then(m => m.StatusModule),
    data: { icon: 'directions', text: 'Statuses' }
  }
];
