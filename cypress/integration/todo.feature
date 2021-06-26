Feature: Add and Remove todo list

  User should be able to add and remove todo list

  Scenario: Add and Remove items form todo list
    Given User open todo application
    When Enter todo item
    And Click on Add button
    Then Todo item should be added
    And Counter should be increased
    When Click on todo checkbox
    Then Todo item should be removed form the list
    And Count should be 0

Scenario: Add more than one and Remove items form todo list
    Given User open todo application
    When Enter todo lists and click on Add
    Then Todo item list should be shown
    And Counter should be increased based on list
    When Click on todo checkbox for each list item
    Then Todo item should be removed form the list
    And Count should be 0
