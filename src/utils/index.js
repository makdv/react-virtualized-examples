const BADGE_COLORS = [
    '#f44336',
    '#3f51b5',
    '#4caf50',
    '#ff9800',
    '#2196f3',
    '#374046',
    '#cddc39',
    '#2196f3',
    '#9c27b0',
    '#ffc107',
    '#009688',
    '#673ab7',
    '#ffeb3b',
    '#cddc39',
    '#795548',
  ];

  export const getItemColor = (i) => BADGE_COLORS[i % BADGE_COLORS.length];