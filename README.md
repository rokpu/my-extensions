# My Extension

This is a simple Chrome Extension that allows you to group and order links for quick access in your browser. It reads from a local `links.json` file that you can customize as needed.

## Project Structure

The structure of the project is as follows:

```
- images/           # Folder for storing images
- icon.png          # Extension icon
- links.json        # JSON file with the links and their categories
- manifest.json     # Extension manifest file
- popup.html        # Popup HTML file
- popup.js          # JavaScript logic for parsing the links and building the popup
- README.md         # This file
- style.css         # CSS file for popup styling
```

## How to Use

1. Clone or download this repository to your local machine.

2. Open the Chrome browser, click on the three-dot menu on the top right, and select More Tools -> Extensions.

3. Enable 'Developer mode' on the top right of the Extensions page.

4. Click on 'Load unpacked' and select the project directory.

5. The extension should now be added to your browser. You can access it by clicking on the extension's icon.

## Customization

### Adding or Updating Links

To add or update links, open the `links.json` file and modify the `links` object.

Each key in the `links` object is a name for a link. Each value is another object that contains the URL for the link, an optional image, and an optional category.

Here's an example of what a link could look like:

```json
"Figma": {
    "link": "https://www.figma.com/files",
    "img": "images/figma.png",
    "category": "Productivity"
}
```

- `link`: URL of the link.
- `img`: Path to an image file for the link. This is optional.
- `category`: Category of the link. This is optional.

### Customizing Link Order

To customize the order in which links appear, modify the `categoriesOrderList` array in the `links.json` file. This array should contain category names in the order you want them to appear.

For example, if you have links in "Development" and "Productivity" categories, and you want "Development" to appear first, your `categoriesOrderList` might look like this:

```json
"categoriesOrderList": [
    "Development",
    "Productivity"
]
```

Links that have a category not listed in `categoriesOrderList` will appear in alphabetical order after the ordered categories. Links with no category will be grouped under 'Other', which will always appear last.

## Note

- Make sure your JSON file is valid. You can check its validity by using online tools such as [JSONLint](https://jsonlint.com/).

- Make sure the images specified in the `links.json` file exist in the `images/` directory.

- If there are any issues, check the console for errors.

## Getting Future Updates

To ensure you stay up-to-date with future enhancements and fixes, follow these steps:

### Method 1: Star the Repository

If you have a GitHub account, you can "star" the repository. This does two things:

1. It helps you quickly navigate to the repository from your GitHub dashboard.
2. You can choose to receive notifications when the repository is updated.

### Method 2: Clone and Pull from the Repository

If you have `git` installed on your local machine, you can clone the repository. This means creating a local copy of the code on your own computer. With a cloned repository, you can pull any updates that have been pushed to the repository. Here's how:

1. Clone the repository:

    ```
    git clone <repository-url>
    ```

    Replace `<repository-url>` with the URL of the repository on GitHub.

2. Navigate to the repository's directory:

    ```
    cd <repository-directory>
    ```

    Replace `<repository-directory>` with the name of the directory created by the `git clone` command.

3. Pull updates from the repository:

    ```
    git pull
    ```

    This command pulls any updates that have been made to the repository since you last cloned or pulled it.

Remember, pulling from a repository will overwrite any local changes you've made that haven't been committed and pushed to your own repository. If you plan to make changes to the code, consider forking the repository and cloning your fork instead.

### Method 3: Watch Releases on GitHub

On the repository's GitHub page, you can click the "Watch" button and select "Releases only". This will send you a notification whenever a new release is published.

## Keeping your Extension Up-to-Date

Once you've pulled updates from the repository (or downloaded and replaced your local copy with the updated code), you'll need to update the extension in your browser:

1. Open the Extensions page in your browser (from the three-dot menu, select More Tools -> Extensions).
2. Find the extension in the list and click the "Reload" button. This will load the updated code into the extension.

Note: In some cases, you may need to remove the extension and add it again using the "Load unpacked" option if "Reload" is not available.

Stay tuned for future updates!