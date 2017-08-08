import {
  HOME_PAGE_ROUTE,
  ABOUT_PAGE_ROUTE,
  PORTFOLIO_PAGE_ROUTE,
} from './routes'

test('HOME', () => {
  expect(HOME_PAGE_ROUTE).toBe('/')
  expect(ABOUT_PAGE_ROUTE).toBe('/about')
  expect(PORTFOLIO_PAGE_ROUTE).toBe('/portfolio')
})
