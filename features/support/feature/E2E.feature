@SauceDemo
Feature: Acceptance Test for Sauce Demo site

# 1. Automate login flow, add "Sauce Labs Backpack" to cart and verify that correct item is added to cart

# 2. Automate login flow, add "Sauce Labs Fleece Jacket" to cart and verify that correct item is added to cart

# 3. Automate login flow, click on hamburger button (top left), navigate to 'About' and verify if it successfully navigated or not
    @TEST001
    Scenario: Login and Add "Sauce Labs Backpack" to Cart
      Given I am on the Saucedemo login page
      When I enter valid username "standard_user" and password "secret_sauce"
      And I click the "Login" button
      Then I should be logged in successfully   
      And I see no counter on cart icon
      When I add "Sauce Labs Backpack" to the cart
      Then I see counter cart is 1
      And I click cart icon
      And I see "Sauce Labs Backpack" in cart list

    @TEST002
    Scenario: Login and Add "Sauce Labs Fleece Jacket" to Cart
      Given I am on the Saucedemo login page
      When I enter valid username "standard_user" and password "secret_sauce"
      And I click the "Login" button
      Then I should be logged in successfully   
      And I see no counter on cart icon
      When I add "Sauce Labs Fleece Jacket" to the cart
      Then I see counter cart is 1
      And I click cart icon
      And I see "Sauce Labs Fleece Jacket" in cart list

    @TEST003
    Scenario: Login and Add Product more than 1 to Cart
      Given I am on the Saucedemo login page
      When I enter valid username "standard_user" and password "secret_sauce"
      And I click the "Login" button
      Then I should be logged in successfully   
      And I see no counter on cart icon
      When I add "Sauce Labs Backpack" to the cart
      Then I see counter cart is 1
      When I add "Sauce Labs Bike Light" to the cart
      Then I see counter cart is 2
      And I click cart icon
      And I see cart list contains product item:
       |Sauce Labs Bike Light|
       |Sauce Labs Backpack  |

    @TEST004
    Scenario: Login and navigate to about page
      Given I am on the Saucedemo login page
      When I enter valid username "standard_user" and password "secret_sauce"
      And I click the "Login" button
      Then I should be logged in successfully  
      When I click hamburger icon
      Then I see "About" menu
      When I click "About" menu
      Then I go to about page

