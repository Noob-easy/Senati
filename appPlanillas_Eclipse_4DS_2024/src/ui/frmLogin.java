package ui;

import java.awt.Color;
import java.awt.Cursor;
import java.awt.EventQueue;
import java.awt.Insets;

import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JPasswordField;
import javax.swing.JTextField;
import javax.swing.JButton;
import javax.swing.ImageIcon;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.awt.event.FocusAdapter;
import java.awt.event.FocusEvent;
import java.awt.event.KeyAdapter;
import java.awt.event.KeyEvent;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

public class frmLogin extends JFrame {
	private static final long serialVersionUID = 1L;

	JTextField txtDni;
	JPasswordField txtPassword;
	
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					frmLogin frame = new frmLogin();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	public frmLogin() {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(0, 0, 350, 250);
		getContentPane().setLayout(null);
		setLocationRelativeTo(null);
		setUndecorated(true);
		
		JPanel pnlLogo = new JPanel();
		pnlLogo.setBounds(0, 0, 350, 50);
		pnlLogo.setBackground( new Color(94,17,90) );
		pnlLogo.setLayout(null);
		getContentPane().add(pnlLogo);
		
		JLabel imgLogo = new JLabel();
		imgLogo.setIcon(new ImageIcon(frmLogin.class.getResource("/ui/img/logo.png")));
		imgLogo.setBounds(71, 3, 208, 43);
		pnlLogo.add(imgLogo);

		JLabel imgSalir = new JLabel();
		imgSalir.setIcon(new ImageIcon(frmLogin.class.getResource("/ui/img/salir.png")));
		imgSalir.setBounds(320, 10, 24, 24);
		pnlLogo.add(imgSalir);
		
		JLabel lblDni = new JLabel("Dni :");
		lblDni.setBounds(90, 100, 80, 30);
		getContentPane().add(lblDni);
		
		JLabel lblPassword = new JLabel("Password :");
		lblPassword.setBounds(90, 140, 80, 30);
		getContentPane().add(lblPassword);
		
		txtDni = new JTextField();
		txtDni.setColumns(8);
		txtDni.setBounds(170, 100, 80, 30);
		txtDni.setMargin( new Insets( 5, 5, 5, 5) );
		getContentPane().add(txtDni);
		
		txtPassword = new JPasswordField();
		txtPassword.setColumns(6);
		txtPassword.setBounds(170, 140, 80, 30);
		txtPassword.setMargin( new Insets( 5, 5, 5, 5) );
		getContentPane().add(txtPassword);

		JButton btnIniciar = new JButton("Iniciar");
		btnIniciar.setBackground(new Color(94, 17, 90) );
		btnIniciar.setBorderPainted(false);
		btnIniciar.setBounds(50, 200, 100, 30);
		btnIniciar.setCursor(new Cursor (Cursor.HAND_CURSOR));
		btnIniciar.setFocusPainted(false);
		btnIniciar.setForeground(Color.WHITE);
		btnIniciar.setMnemonic('n');
		getContentPane().add(btnIniciar);
		
		JButton btnCancelar = new JButton("Cancelar");
		btnCancelar.setBackground(new Color(94, 17, 90) );
		btnCancelar.setBorderPainted(false);
		btnCancelar.setBounds(200, 200, 100, 30);
		btnCancelar.setCursor(new Cursor (Cursor.HAND_CURSOR));
		btnCancelar.setFocusPainted(false);
		btnCancelar.setForeground(Color.WHITE);
		btnCancelar.setMnemonic('a');
		getContentPane().add(btnCancelar);
		
		
		
		btnIniciar.addMouseListener(new MouseAdapter() {
			public void mouseEntered(MouseEvent e) { btn_focusGained(btnIniciar); 	}
			public void mouseExited(MouseEvent e) {	btn_focusLost(btnIniciar);} });
		btnIniciar.addFocusListener(new FocusAdapter() {
			@Override public void focusGained(FocusEvent e) {	btn_focusGained(btnIniciar);}
			@Override public void focusLost(FocusEvent e) {		btn_focusLost(btnIniciar);} });
		btnIniciar.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {		btnIniciar_actionPerformed();} });
		
		btnCancelar.addMouseListener(new MouseAdapter() {
			public void mouseEntered(MouseEvent e) { btn_focusGained(btnCancelar); 	}
			public void mouseExited(MouseEvent e) {	btn_focusLost(btnCancelar);} });
		btnCancelar.addFocusListener(new FocusAdapter() {
			@Override public void focusGained(FocusEvent e) {	btn_focusGained(btnCancelar);}
			@Override public void focusLost(FocusEvent e) {		btn_focusLost(btnCancelar);} });
		btnCancelar.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {		btnCancelar_actionPerformed();} });
		
			
		
		
		txtDni.addKeyListener(new KeyAdapter() {
			@Override public void keyTyped(KeyEvent e) { txt_keyTyped(e); } });
		txtDni.addFocusListener(new FocusAdapter() {
			@Override public void focusGained(FocusEvent e) { txt_focusGained(txtDni); }
			@Override public void focusLost(FocusEvent e) { txt_focusLost(txtDni); } });

		txtPassword.addKeyListener(new KeyAdapter() {
			@Override public void keyTyped(KeyEvent e) { txt_keyTyped(e); } });
		txtPassword.addFocusListener(new FocusAdapter() {
			@Override public void focusGained(FocusEvent e) { txt_focusGained(txtPassword); }
			@Override public void focusLost(FocusEvent e) { txt_focusLost(txtPassword); } });

		
		imgSalir.addMouseListener(new MouseAdapter() {
			@Override public void mouseClicked(MouseEvent e) { imgSalir_mouseClicked(); } });
	}

	
	protected void txt_keyTyped(KeyEvent e) {
		JTextField txt = (JTextField) e.getSource();
		char tecla = e.getKeyChar();
		
		
		if ( !Character.isDigit( e.getKeyChar() ) ||
				Character.isWhitespace( e.getKeyChar() ) ||
				txt.getText().length() == txt.getColumns() 	)
			e.consume();
	}
	
	protected void txt_focusLost(JTextField txt) {
		txt.setBackground(Color.WHITE);
	}
	
	
	protected void btn_focusGained(JButton btn) {
		btn.setBackground(Color.BLACK);
		
	}

	protected void btn_focusLost(JButton btn) {
		btn.setBackground(new Color(94 , 19 , 40));
		
	}

	protected void btnIniciar_actionPerformed() {
		
		
	}
	
	
	protected void btnCancelar_actionPerformed() {
		txtDni.setText("");
		txtPassword.setText("");
		txtDni.requestFocus();
	}


	protected void txt_focusGained(JTextField txt) {
		txt.setBackground(Color.yellow);
	}


	protected void imgSalir_mouseClicked() {
		if (JOptionPane.showConfirmDialog(null, "¿Deseas dejarme? :v" , "Salir", JOptionPane.YES_NO_OPTION) == JOptionPane.YES_OPTION);
				System.exit(0);
	}

}