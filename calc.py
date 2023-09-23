import tkinter as tk


def button_click(number):
    current = entry.get()
    entry.delete(0, tk.END)
    entry.insert(tk.END, current + str(number))


def button_clear():
    entry.delete(0, tk.END)


def button_equal():
    try:
        expression = entry.get()
        result = eval(expression)
        entry.delete(0, tk.END)
        entry.insert(tk.END, result)
    except:
        entry.delete(0, tk.END)
        entry.insert(tk.END, "Error")


# Create the main window
window = tk.Tk()
window.title("Calculator")

# Create an entry widget to display the input and output
entry = tk.Entry(window, width=20, font=("Arial", 12))
entry.grid(row=0, column=0, columnspan=4, padx=10, pady=10)

# Define the calculator buttons
buttons = [
    ("7", 1, 0),
    ("8", 1, 1),
    ("9", 1, 2),
    ("/", 1, 3),
    ("4", 2, 0),
    ("5", 2, 1),
    ("6", 2, 2),
    ("*", 2, 3),
    ("1", 3, 0),
    ("2", 3, 1),
    ("3", 3, 2),
    ("-", 3, 3),
    ("0", 4, 0),
    (".", 4, 1),
    ("=", 4, 2),
    ("+", 4, 3)
]

# Create and place the buttons in the window
for button_text, row, column in buttons:
    button = tk.Button(window, text=button_text, width=5, height=2,
                       command=lambda text=button_text: button_click(text))
    button.grid(row=row, column=column, padx=5, pady=5)

# Create a Clear button
clear_button = tk.Button(window, text="C", width=5,
                         height=2, command=button_clear)
clear_button.grid(row=5, column=0, padx=5, pady=5)

# Create an Equal button
equal_button = tk.Button(window, text="=", width=5,
                         height=2, command=button_equal)
equal_button.grid(row=5, column=1, padx=5, pady=5)

# Run the GUI main loop
window.mainloop()
