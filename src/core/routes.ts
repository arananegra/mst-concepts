import { generatePath } from 'react-router';

interface BaseRoutes {
  login : string;
  todos : string;
}

const appBaseRoutes : BaseRoutes =  {
  login: '/',
  todos: '/todos',
}

interface RouterSwitchRoutes extends BaseRoutes {
  todoEdit: string;
}

export const routerSwitchRoutes : RouterSwitchRoutes = {
  ...appBaseRoutes,
  todoEdit: `/todo-edit/:id`,
}

interface RoutesLinks extends BaseRoutes {
  todoEdit: (id : any) => string;
}

export const routesLinks : RoutesLinks = {
  ...appBaseRoutes,
  todoEdit: (id) => generatePath(routerSwitchRoutes.todoEdit, {id})
}
