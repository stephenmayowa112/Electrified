import os
import re

# Color replacements
replacements = {
    'green-600': 'orange-600',
    'green-700': 'orange-700',
    'green-500': 'orange-500',
    'green-800': 'orange-800',
    'green-50': 'orange-50',
    'green-100': 'orange-100',
    'green-200': 'orange-200',
}

def update_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        for old, new in replacements.items():
            content = content.replace(old, new)
        
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated: {filepath}")
            return True
        return False
    except Exception as e:
        print(f"Error updating {filepath}: {e}")
        return False

# Find all JSX and CSS files
src_dir = 'src'
updated_count = 0

for root, dirs, files in os.walk(src_dir):
    for file in files:
        if file.endswith(('.jsx', '.css')):
            filepath = os.path.join(root, file)
            if update_file(filepath):
                updated_count += 1

print(f"\nTotal files updated: {updated_count}")
