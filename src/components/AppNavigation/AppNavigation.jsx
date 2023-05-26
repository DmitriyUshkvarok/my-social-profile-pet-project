import Container from 'components/Container/Container';
import {
  StyleNavigationLink,
  StyleNavigation,
  NavigationList,
  NavigatiomItem,
  StyleCgProfile,
  StyleAiOutlinePlus,
  StyleTfiLayoutGrid3,
} from './AppNavigation.styled';
const AppNavigation = () => {
  return (
    <Container>
      <StyleNavigation>
        <NavigationList>
          <NavigatiomItem>
            <StyleNavigationLink to="/Home">
              <StyleCgProfile size={30} />
            </StyleNavigationLink>
          </NavigatiomItem>
          <NavigatiomItem>
            <StyleNavigationLink to="/create-post">
              <StyleAiOutlinePlus size={30} />
            </StyleNavigationLink>
          </NavigatiomItem>
          <NavigatiomItem>
            <StyleNavigationLink to="/Posts">
              <StyleTfiLayoutGrid3 size={30} />
            </StyleNavigationLink>
          </NavigatiomItem>
        </NavigationList>
      </StyleNavigation>
    </Container>
  );
};

export default AppNavigation;
